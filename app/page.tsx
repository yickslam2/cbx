import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getCharterMarkdown } from "@/lib/charter";

export default function Home() {
  const content = getCharterMarkdown();

  return (
    <>
      <main className="page">
        <article className="charter">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
      </main>
      <footer>中商匯 CBX · Central Business Exchange</footer>
    </>
  );
}
