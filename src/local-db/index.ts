import { filterAsync } from "@/util/async"
import { readFile, readdir, stat, writeFile } from "fs/promises"
import { join } from "path"

const CHARSET = "utf-8"

/**
 * 学習用に用意した簡易的な永続化関数。
 * @param key データのid
 * @param json データ
 */
export const saveJson = async (key: string, json: unknown) => {
    const text = JSON.stringify(json)
    const fileName = `./local-data/${key}.data.json`
    await writeFile(fileName, text, { encoding: CHARSET })
}

/**
 * 学習用に用意した簡易的な取得関数。
 * @param key データのid
 */
export const loadJson = async (key: string, defaultValue?: unknown): Promise<unknown> => {
    try {
        const fileName = `./local-data/${key}.data.json`
        const text = await readFile(fileName, CHARSET)
        return JSON.parse(text)
    } catch (error) {
        return defaultValue
    }
}

/**
 * 学習用に用意した簡易的なファイル一覧の取得関数。
 * @param key データのid
 */
export const listJson = async () => {
    const dirName = "./local-data"
    const filesAndDirs = await readdir(dirName)
    const files = await filterAsync(filesAndDirs, async (item) => {
        const itemStatus = await stat(join(dirName, item))
        return itemStatus.isFile()
    })
    return files.map(file => file.replace(/\.data\.json$/, ""))
}
