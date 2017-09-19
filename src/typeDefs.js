export default `
  type DropdownValue {
    value: String
    label: String
  }

  type SubmittalValue {
    name: [DropdownValue]
  }

  type MeetingValue {
    name: [DropdownValue]
  }

  type Company {
    id: ID!
  }

  type Project {
    id: ID!
    submittals: SubmittalValue
    meetings: MeetingValue
  }

  type Query {
    company(id: ID!): Company
    project(id: ID!): Project
  }
`
