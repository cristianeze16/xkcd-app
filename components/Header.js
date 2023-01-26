import { Container, Text } from "@nextui-org/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/router";


export function Header() {
  const [results, setResults] = useState([]);
  const searchRef = useRef();
  const { locale,locales} = useRouter()
  const getValue = ()=> searchRef.current?.value
  
   
  const handleChange = () => {
    const q = getValue()

    fetch(`/api/search?q=${q}`)
      .then((res) => res.json())
      .then((searchResults) => {
        setResults(searchResults);
      });
  };

   const restOfLocales = locales.filter(l => l !== locale)

   


  return (
    <header className="flex justify-between items-center p-4 max-w-xl m-auto">
      <h1 className="font-bold">
        <Link href="/" className="transition hover:opacity-80">
          Next<span className="font-light">xkcd</span>
        </Link>
      </h1>

      <nav>
        <ul className="flex flex-row gap-2">
          <li>
            <Link className="text-lg font-semibold" href="/">
              Home
            </Link>
          </li>

          <li>
            <Link
              className="text-lg font-semibold"
              href='/' locale={restOfLocales[0]}
            >
              {`${restOfLocales[0]}`}
            </Link>
          </li>

          <li>
            <input
              className=" px-4 py-1 border border-gray-400 rounded-3xl text-xs "
              ref={searchRef}
              type="search"
              onChange={handleChange}
            />
            <div className="relative z-10">
              {Boolean(results.length) && (
                <div className="absolute top-0 left-0">
                  <ul className="z-50 w-full border rounded-lg shadow-xl border-gray-200 bg-white overflow-auto">
                    {results.map((result) => {
                      return (
                        <li className=" m-0 " key={result.id}>
                          <Link href={`/comic/${result.id}`}>
                            <Text className="px-2 py-2 text-sm font-semibold hover:bg-slate-200 block">
                              {result.title}
                            </Text>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
