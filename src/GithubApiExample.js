import { useEffect, useState } from "react";
import axios from "axios";

// Exemplo criado para apoio ao Daniel no Discord
const GithubApiExample = () => {
  const [user, setUser] = useState([]);
  const [repos, setRespos] = useState([]);
  const [search, setSearch] = useState("");
  const [terms, setTerms] = useState("");
  useEffect(() => {
    // Simular um debounce para evitar muitas buscas na API.
    const handler = setTimeout(() => setTerms(search), 300);
    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    const params = !terms
      ? { q: "user:dandankara" }
      : { q: `user:dandankara ${terms} in:name` };
    axios
      //.get("https://api.github.com/users/dandankara/repos", { params })
      .get(`https://api.github.com/search/repositories`, {
        params,
      })
      .then(({ data: { items }, ...rest }) => {
        console.log("Info repo", { items });
        console.log("Info repo", { rest });
        setRespos(items);
      })
      .catch((err) => {
        console.log("Info repo", { err });
      });
    axios
      .get("https://api.github.com/users/dandankara")
      .then(({ data }) => {
        console.log("Info login", { data });
        setUser(data);
      })
      .catch((err) => {
        console.log("Info login", { err });
      });
  }, [terms]);
  const onSearchChange = (ev) => {
    const { value } = ev.target;
    console.log({ value });
    setSearch(value);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Github API</h1>
      <div>
        <h2>Informações pessoais {user.name}</h2>
        <input
          type="search"
          placeholder="Buscar"
          className="p-1"
          value={search}
          onChange={onSearchChange}
        />
      </div>
      <div className="flex flex-col">
        {repos.map((repo) => (
          <div key={repo.id}>
            <a href={repo.html_url}>
              <h3>
                {repo.name} -{" "}
                <span className="text-gray-500">{repo.language}</span>
              </h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GithubApiExample;
