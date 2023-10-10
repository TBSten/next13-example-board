import { readFile, writeFile } from "fs/promises"

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
export const loadJson = async (key: string): Promise<unknown> => {
    const fileName = `./local-data/${key}.data.json`
    const text = await readFile(fileName, CHARSET)
    return JSON.parse(text)
}
