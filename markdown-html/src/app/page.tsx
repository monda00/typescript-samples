import fs from 'fs'
import path from 'path'
import markdownToHtml from 'lib/markdownToHtml'

const Home = async () => {
  const markdownPath = path.join(process.cwd(), './contents/sample.md')
  const fileContent = fs.readFileSync(markdownPath, 'utf8')

  const content = await markdownToHtml(fileContent)
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  )
}

export default Home
