import { NextApiRequest, NextApiResponse } from 'next'
import { FindMany<%= pascalCaseSingularModelName%>Args } from '@prisma/client'
import {_getMany<%= pascalCaseSingularModelName%>} from './_operations'
import isEmpty from 'lodash/isEmpty'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data
  } = req.body

  const selectInput = isEmpty(data.select) ? undefined : data.select
  const whereInput = isEmpty(data.where) ? undefined : data.where
  const includeInput = isEmpty(data.include) ? undefined : data.include


  const findManyArgs: FindMany<%= pascalCaseSingularModelName%>Args = {
    select: selectInput,
    where: whereInput,
    include: includeInput
  }

  try {
    const <%= camelCaseSingularModelName%>s = await _getMany<%= pascalCaseSingularModelName%>(findManyArgs)

    return res.status(200).json({data: <%= camelCaseSingularModelName%>s})
  } catch (err) {
    return res.status(500).json({statusCode: 500, message: err.message})
  }
}
