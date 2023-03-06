import { Configuration, OpenAIApi } from "openai"

import type { NextApiRequest, NextApiResponse } from "next"

const configration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configration)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { prompt } = req.body

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "512x512",
      response_format: "b64_json",
    })

    const image = response.data.data[0].b64_json
    res.status(200).json({ image })
  } catch (error) {
    console.error(error)
    res.status(500).send("Something went wrong")
  }
}
