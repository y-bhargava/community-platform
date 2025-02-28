import { faker } from '@faker-js/faker'

import type { Comment } from 'oa-shared'
import type { IComment } from './CommentItem/types'

export const fakeComment = (commentOverloads: Partial<IComment> = {}) => ({
  _created: faker.date.past().toString(),
  creatorCountry: faker.address.countryCode().toLowerCase(),
  _creatorId: faker.internet.userName(),
  _id: faker.database.mongodbObjectId(),
  creatorName: faker.internet.userName(),
  isUserVerified: faker.datatype.boolean(),
  isUserSupporter: faker.datatype.boolean(),
  text: faker.lorem.text(),
  isEditable: faker.datatype.boolean(),
  creatorImage: faker.datatype.boolean() ? faker.image.avatar() : undefined,
  ...commentOverloads,
})

export const createFakeComments = (
  numberOfComments = 2,
  commentOverloads = {},
): IComment[] =>
  [...Array(numberOfComments).keys()].slice(0).map(() =>
    fakeComment({
      ...commentOverloads,
    }),
  )

export const fakeCommentSB = (
  commentOverloads: Partial<Comment> = {},
): Comment => ({
  id: 0,
  createdAt: new Date(),
  modifiedAt: new Date(),
  createdBy: null,
  comment: faker.lorem.text(),
  sourceId: 0,
  sourceType: 'questions',
  parentId: 0,
  deleted: false,
  highlighted: false,
  replies: [],
  ...commentOverloads,
})
