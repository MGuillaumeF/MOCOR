import {promises as fs} from 'fs';
import path from 'path';

interface IFsItem {
    name : string;
}

interface IFile extends IFsItem {
    ext: string;
    lines : number;
    size : number;
}

interface IDirectory extends IFsItem{
    content : Array<IDirectory|IFile>;
}

export async function getTree(sources: string) : Promise<IDirectory> {
    const itemPath = path.resolve(process.cwd(), sources);
    const result : IDirectory = {
        content : [],
        name : path.basename(itemPath)
    }
    try {
        await fs.access(itemPath);
        const rootDirectoryStats = await fs.lstat(itemPath);
        if (rootDirectoryStats.isDirectory()) {
            const rootDirectoryContent = await fs.readdir(itemPath);
            for (const fsItem of rootDirectoryContent) {
                if(['.', '..'].includes(fsItem)) {
                    continue;
                }
                const fsItemPath = path.resolve(itemPath, fsItem);
                const fsItemStats = await fs.lstat(fsItemPath);
                if (fsItemStats.isDirectory()) {
                    result.content.push({
                        name : fsItem,
                       content : [await getTree(fsItemPath)]
                    });
                } else if (fsItemStats.isFile()) {
                    result.content.push({
                        name : fsItem,
                        ext: path.extname(fsItemPath),
                        lines : await (await fs.readFile(fsItemPath)).toString().split('\n').length,
                        size : fsItemStats.size
                    })
                } else {
                    console.warn('[WARN]', fsItem)
                }

            }
        } else {
            console.error("[ERROR] Call error, param must be path to directory");
        }

    } catch(exception) {
        console.error("[ERROR] Analyze of tree is not available :", Error(exception).message);
    }
    return result;
}