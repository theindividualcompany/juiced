import {
  PrismaClient,
  <%= pascalCaseSingularModelName%>CreateArgs,
  <%= pascalCaseSingularModelName%>UpdateArgs,
  <%= pascalCaseSingularModelName%>UpdateManyArgs,
  FindOne<%= pascalCaseSingularModelName%>Args,
  FindMany<%= pascalCaseSingularModelName%>Args,
  <%= pascalCaseSingularModelName%>DeleteArgs,
  <%= pascalCaseSingularModelName%>DeleteManyArgs,
  <%= pascalCaseSingularModelName%>WhereUniqueInput
} from '@prisma/client'


export async function _exists<%= pascalCaseSingularModelName%>(args: <%= pascalCaseSingularModelName%>WhereUniqueInput) {
  const prisma = new PrismaClient()

  try {
    const result = await prisma.<%= camelCaseSingularModelName%>.findOne({
      select: {
        id: true
      },
      where: args
    })

    if (result) {
      return true
    }

    return false
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _create<%= pascalCaseSingularModelName%>(args: <%= pascalCaseSingularModelName%>CreateArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.create(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _get<%= pascalCaseSingularModelName%>(args: FindOne<%= pascalCaseSingularModelName%>Args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.findOne(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _getMany<%= pascalCaseSingularModelName%>(args: FindMany<%= pascalCaseSingularModelName%>Args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.findMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _update<%= pascalCaseSingularModelName%>(args: <%= pascalCaseSingularModelName%>UpdateArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.update(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _updateMany<%= pascalCaseSingularModelName%>(args: <%= pascalCaseSingularModelName%>UpdateManyArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.updateMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _delete<%= pascalCaseSingularModelName%>(args: <%= pascalCaseSingularModelName%>DeleteArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.delete(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _deleteMany<%= pascalCaseSingularModelName%>(args: <%= pascalCaseSingularModelName%>DeleteManyArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.deleteMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}
