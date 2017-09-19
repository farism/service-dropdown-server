import { Project } from './db'

export default {
  Query: {
    company: (_) => ({}),
    project: (_, args) => Project.findById(args.id),
  },
}
