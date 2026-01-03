import { z } from '~/schemas'

export const ElectionSchema = z.object({
  id: z.string(),
  name: z.string(),
  votingDate: z.string(),
  candidateDigits: z.number(),
  createdAt: z.string(),
})

const mockElections: Election[] = [
  {
    id: 'e1f93a21-82b3-4c41-9b77-12c5f2a9a111',
    name: 'City Mayor Election 2025',
    votingDate: '2025-03-10T09:00:00.000Z',
    candidateDigits: 2,
    createdAt: '2025-01-05T14:12:30.000Z',
  },
  {
    id: 'b4c28f44-91e2-4da8-8e02-7fd1130b0021',
    name: 'Student Council Presidential Election',
    votingDate: '2025-04-02T12:00:00.000Z',
    candidateDigits: 3,
    createdAt: '2025-01-20T10:22:10.000Z',
  },
  {
    id: '9d12f6e8-1181-43cd-bb07-3f13cb1b3019',
    name: 'National Assembly Election',
    votingDate: '2025-06:15T10:00:00.000Z',
    candidateDigits: 4,
    createdAt: '2025-02-01T16:34:50.000Z',
  },
  {
    id: 'd7af4a91-41f0-4b7b-afb1-0e2b44a40355',
    name: 'Company Board Election',
    votingDate: '2025-02-25T13:00:00.000Z',
    candidateDigits: 2,
    createdAt: '2025-01-10T08:11:05.000Z',
  },
  {
    id: 'fa44a9d2-55c6-4bd4-9c7b-3a8c193a7220',
    name: 'Community Leadership Election',
    votingDate: '2025-05-01T15:00:00.000Z',
    candidateDigits: 3,
    createdAt: '2025-01-25T18:44:00.000Z',
  },
  {
    id: '7dd31b22-9df3-4f30-9b13-4f8c22098110',
    name: 'Regional Governor Election',
    votingDate: '2025-07-20T09:00:00.000Z',
    candidateDigits: 4,
    createdAt: '2025-02-10T20:10:30.000Z',
  },
]

export type Election = z.infer<typeof ElectionSchema>
export const useElectionsStore = defineStore('elections', () => {
  const elections = ref<Election[]>([...mockElections])

  const addElection = (newElection: Election) => {
    elections.value.push(newElection)
  }

  const $reset = () => {
    elections.value = [...mockElections]
  }
  return { elections, addElection, $reset }
})
