import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(perfers-color-scheme: dark)");

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        if (
          localStorage.getItem("theme") === "dark" ||
          (!("theme" in localStorage) && darkQuery.matches)
        ) {
          element.classList.add("dark");
        } else element.classList.remove("dark");
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) element.classList.add("dark");
      element.classList.remove("dark");
    }
  });

  const options = [
    {
      icon: "sunny",
      mode: "light",
    },
    {
      icon: "moon",
      mode: "dark",
    },
    {
      icon: "desktop-outline",
      mode: "system",
    },
  ];
  return (
    <section className="min-h-screen pt-8 dark:bg-slate-900 dark:text-gray-100 duration-100">
      <div className="fixed top-5 right-10 duration-100 dark:bg-slate-700 bg-gray-100 rounded">
        {options.map((item) => (
          <button
            key={item.mode}
            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 cursor-pointer ${
              theme === item.mode ? "text-sky-600" : "text-gray-400"
            }`}
            onClick={() => setTheme(item.mode)}
          >
            <ion-icon name={item.icon}></ion-icon>
          </button>
        ))}
      </div>
      <div className="max-w-5xl mx-auto px-5 ">
        <div className="text-center mb-3">
          <h2 className="text-5xl">Rofiyev Dilshod</h2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            enim nesciunt assumenda deserunt consequatur dolor est cumque
            tempore, impedit id aut laboriosam explicabo reprehenderit, culpa
            sed. Labore non nobis suscipit? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Obcaecati sunt est ad corporis ex
            voluptatem iusto at non minus exercitationem? Quibusdam laboriosam
            porro dolores. Nam minima unde omnis deleniti eveniet exercitationem
            dignissimos non vel. At nesciunt earum sequi iusto quod odio! Quod,
            perferendis reprehenderit exercitationem ipsa quasi quas eos
            repellendus repellat natus aspernatur dicta maxime pariatur sapiente
            neque vero repudiandae! Quasi amet beatae ipsum recusandae quidem!
            Mollitia nisi, ipsam, tempore molestiae iure similique, vitae alias
            nostrum dolorum quae minus velit sapiente vero voluptas! Pariatur
            corrupti qui iusto dolorem quas architecto quod rerum doloribus!
            Quibusdam quod, facilis beatae cum totam tenetur velit, quidem enim
            odio optio, inventore culpa earum consectetur architecto animi neque
            in saepe voluptates ducimus iusto quisquam? Consequuntur
            perspiciatis doloremque molestiae eos in unde velit molestias rerum
            nisi facere natus quibusdam veritatis omnis harum doloribus
            reprehenderit nihil fugit corporis adipisci suscipit perferendis
            delectus, fugiat quia. Voluptates molestiae, iure expedita culpa
            dicta laboriosam labore itaque nisi sint enim quaerat officia quasi
            non, ad eligendi vero sapiente eos autem vitae, eaque ipsum eum
            voluptatem? Hic corrupti sit nobis quidem ea? Repellat, rerum omnis
            culpa ducimus possimus tempore. Non quisquam tempora ex temporibus,
            est nemo accusantium itaque vero esse fugiat. Ad sed delectus ipsa
            doloremque, expedita quasi harum animi explicabo veritatis deserunt
            laboriosam nobis quam blanditiis molestiae fuga esse incidunt,
            beatae sit modi, officiis impedit. Quia nesciunt sunt earum, fugit,
            ut iusto esse totam reprehenderit ratione ex animi vitae commodi
            distinctio ipsa! Vero maxime voluptatum vitae similique rem neque
            quas quam laudantium quidem. Porro, praesentium voluptatum minima
            unde blanditiis, expedita facilis officiis sunt voluptates maxime
            deserunt consequuntur impedit illum nihil perspiciatis ea, ipsum
            tempora ad? Explicabo, esse sed unde earum necessitatibus velit,
            culpa omnis fuga consequuntur ducimus tenetur provident doloribus
            minus delectus expedita deleniti laborum nam quas magni ex
            architecto assumenda! Pariatur.
          </p>
        </div>
      </div>
    </section>
  );
}
