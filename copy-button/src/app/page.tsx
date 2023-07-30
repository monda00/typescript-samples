import CopyButton from "../components/CopyButton"

export default function Home() {
  const textList: string[] = ["text1", "text2", "text3"]

  return (
    <div className="p-20">
      {textList.map((text, index) => (
        <span key={index} className="m-2">
          <div className="relative flex justify-between w-auto p-4 bg-gray-600 rounded-lg">
            <pre className="overflow-x-auto text-white py-2">{text}</pre>
            <CopyButton copyText={text} />
          </div>
        </span>
      ))}
    </div>
  )
}
