import { _get<%= pascalCaseSingularModelName%> } from './_operations'
import { NextApiRequest, NextApiResponse } from "next"
import isEmpty from 'lodash/isEmpty'
import nc from 'next-connect'

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data
  } = req.body

  const selectInput = isEmpty(data.select) ? undefined : data.select
  const whereInput = isEmpty(data.where) ? undefined : data.where
  const includeInput = isEmpty(data.include) ? undefined : data.include

  const findUniqueArgs = {
    select: selectInput,
    where: whereInput,
    include: includeInput
  }

  try {
    const <%= camelCaseSingularModelName%> = await _get<%= pascalCaseSingularModelName%>(findUniqueArgs)

    return res.status(200).json({ data: <%= camelCaseSingularModelName%> })
  } catch (error) {
    console.error("[api] <%= camelCaseSingularModelName%>/get", error)
    return res.status(500).json({ statusCode: 500, message: error.message })
  }
}

export default nc()
  .post(post)