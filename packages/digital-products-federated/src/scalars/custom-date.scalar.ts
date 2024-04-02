import { GraphQLScalarType } from 'graphql';

function validate(dateInput: unknown): Date | never {
  try {
    const date = new Date(dateInput as string);

    return date;
  } catch (e) {
    throw new Error('Invalid date');
  }
}

export const CustomDateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'A simple Date parser',
  serialize: (value) => validate(value),
  parseValue: (value) => validate(value),
  parseLiteral: (ast) => validate(ast),
});
