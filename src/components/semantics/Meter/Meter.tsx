import React, { HTMLProps, ReactElement } from 'react';
import './Meter.scss';
// import { Logger } from '../../logger';
// const LOGGER = Logger.getInstance();
const LOGGER = console ;

interface IMeterProps extends HTMLProps<HTMLMeterElement> {
    /**
   * To define the background color of meter
   */
  bgMeterColor?: string; 
  /**
   * The description of meter
   */
  description?: string;
  /**
   * To define the color of text
   */
  fontMeterColor?: string;
  /**
   * The max end of Meter
   */
  max?: number;
  /**
   * The min end of Meter
   */
  min?: number;
  
  /**
   * To define the color of meter
   */
  strikeMeterColor?: string;
  /**
   * To add CSS in props
   */
  style?: React.CSSProperties;
  /**
   * The title of meter
   */
  title?: string;
  /**
   * The value of meter
   */
  value: number;
}

/**
 * Function to create Meter component
 * @param props Function to create SVG Component
 */
export default function Meter(props: IMeterProps): ReactElement {
  const angleOffset = Math.PI / 2;
  const radius = 150;

  let max = props.max || 100;
  let min = props.min || 0;
  let note = props.value;
  if (min > max) {
    min = 0;
    max = 100;
    LOGGER.error('Invalid définition of min and max values');
  }
  if (note > max) {
    note = max;
    LOGGER.error('Note out of max range');
  }
  if (note < min) {
    note = min;
    LOGGER.error('Note out of min range');
  }
  const totalRange = max - min;
  const valueRange = note - min;
  const ratio = valueRange / totalRange;

  const angle = ratio * 2 * Math.PI;

  function getColor(): string {
    return `rgb(${255*(1-ratio)}, ${255*ratio}, 0)`;
  }
  function getXValue() {
    return 200 + Math.cos(angle + angleOffset) * radius;
  }
  function getYValue() {
    return 200 - Math.sin(angle + angleOffset) * radius;
  }
  return (
    <svg
      className='mocor-meter'
      //style={props.style}
      viewBox='0 0 400 400'
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      strokeWidth={0}
    >
      <title>{props.title || 'Meter'}</title>
      <desc>{props.description || 'A Meter'}</desc>

      {/* <path
        d='M0 200 a 200 200 0 1 0 0 -1 z'
        fill={props.bgMeterColor || '#FFFFFF'}
        stroke='transparent'
      /> */}

<circle
          cx='200'
          cy='200'
          r='195.5'
          fill='transparent'
          stroke={props.strikeMeterColor || getColor()}
          strokeWidth='1'
        />

      {ratio < 1 ? (
        <path
          d={`M200 50 A 150 150 0 ${
            angle < Math.PI ? 0 : 1
          } 0 ${getXValue()} ${getYValue()}`}
          fill='transparent'
          stroke={props.strikeMeterColor || getColor()}
          strokeWidth='20'
          strokeLinecap="round"
        />
      ) : (
        <circle
          cx='200'
          cy='200'
          r='150'
          fill='transparent'
          stroke={props.strikeMeterColor || getColor()}
          strokeWidth='20'
        />
      )}

      <text
        x='200'
        y='200'
        dominantBaseline='middle'
        textAnchor='middle'
        fontFamily='Helvetica,Verdana, Arial, sans-serif'
        fontSize='100'
        fill={props.fontMeterColor || getColor()}
      >
        {note}
      </text>
    </svg>
  );
}
