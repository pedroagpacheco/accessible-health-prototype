import { Example } from 'common/components/example'

const Main = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold pb-4">Checklist</h1>
      <ul>
        <li>react-router</li>
        <li>axe + eslint-plugin-jsx-a11y</li>
      </ul>
      <Example />
    </div>
  )
}

export default Main
