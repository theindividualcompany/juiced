import { NextApiRequest, NextApiResponse } from 'next'
import { FindOne<%= pascalCaseSingularModelName%>Args } from '@prisma/client'
import { _get<%= pascalCaseSingularModelName%> } from './_operations'
import isEmpty from 'lodash/isEmpty'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data
  } = req.body

  const selectInput = isEmpty(data.select) ? undefined : data.select
  const whereInput = isEmpty(data.where) ? undefined : data.where
  const includeInput = isEmpty(data.include) ? undefined : data.include

  const findOneArgs: FindOne<%= pascalCaseSingularModelName%>Args = {
    select: selectInput,
    where: whereInput,
    include: includeInput
  }

  try {
    const <%= camelCaseSingularModelName%> = await _get<%= pascalCaseSingularModelName%>(findOneArgs)

    return res.status(200).json({ data: <%= camelCaseSingularModelName%> })
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message })
  }
}
