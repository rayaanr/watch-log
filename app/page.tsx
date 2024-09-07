import { Link } from "@nextui-org/link";
// import { Snippet } from "@nextui-org/snippet";
// import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/styles/primitives";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg text-center justify-center">
                <h1 className={title()}>Watch&nbsp;</h1>
                <h1 className={title({ color: "violet" })}>Movies & TV Shows&nbsp;</h1>
                <br />
                <h1 className={title()}>and keep track of them all at one place.</h1>
                <h2 className={subtitle({ class: "mt-4" })}>
                    Don't worry about your watched log anymore
                </h2>
                <p className="text-5xl"></p>
            </div>

            <div className="flex gap-3">
                <Link
                    isExternal
                    className={buttonStyles({
                        color: "primary",
                        radius: "full",
                        variant: "shadow",
                    })}
                    href={siteConfig.links.docs}
                >
                    Get Started
                </Link>
                <Link
                    isExternal
                    className={buttonStyles({ variant: "bordered", radius: "full" })}
                    href={siteConfig.links.github}
                >
                    GitHub
                </Link>
            </div>

            {/* <div className="mt-8">
                <Snippet hideCopyButton hideSymbol variant="flat">
                    <span>
                        Get started by editing
                        <Code color="primary">app/page.tsx</Code>
                    </span>
                </Snippet>
            </div> */}
        </section>
    );
}

// "use client";

// import { Button } from "@nextui-org/button";
// import { Input } from "@nextui-org/input";
// import { Card, CardBody } from "@nextui-org/card";
// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
// import Image from "next/image";

// async function fetchMovie(movie: string) {
//     let param = "";

//     if (movie.startsWith("tt")) param = "i";
//     else param = "t";

//     const response = await fetch(
//         `https://www.omdbapi.com/?${param}=${movie}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
//     );
//     const movieData = await response.json();
//     console.log(movieData);
//     return movieData;
// }

// export default function Home() {
//     const [movieInput, setMovieInput] = useState("");

//     const {
//         data: movieData,
//         isLoading,
//         isError,
//         refetch,
//     } = useQuery({
//         queryKey: ["movie"],
//         queryFn: async () => await fetchMovie(movieInput),
//         enabled: false,
//     });

//     const searchMovie = () => {
//         if (movieInput) {
//             refetch();
//         }
//     };

//     return (
//         <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
//             <div>
//                 <div className="flex gap-5">
//                     <Input
//                         placeholder="Search movie by title or imdb id"
//                         value={movieInput}
//                         onChange={(e) => setMovieInput(e.target.value)}
//                         className="w-80"
//                     />
//                     <Button color="primary" onClick={searchMovie}>
//                         Search
//                     </Button>
//                 </div>
//             </div>
//             <div>
//                 {isLoading ? (
//                     <h1>Loading...</h1>
//                 ) : isError ? (
//                     <h1>Error fetching movie</h1>
//                 ) : movieData ? (
//                     <Card key={movieData.imdbID}>
//                         <div className="flex items-center gap-4">
//                             <Image
//                                 src={movieData.Poster}
//                                 alt={movieData.Title}
//                                 height={200}
//                                 width={100}
//                                 className="rounded-lg h-32"
//                             />
//                             <div>
//                                 <h1 className="text-2xl">{movieData.Title}</h1>
//                                 <p className="text-lg">{movieData.Year}</p>
//                                 <p className="text-lg">{movieData.Genre}</p>
//                                 <p className="text-lg">{movieData.Director}</p>
//                                 <p className="text-lg">{movieData.Actors}</p>
//                                 <p className="text-xs">{movieData.Plot}</p>
//                             </div>
//                         </div>
//                     </Card>
//                 ) : (
//                     ""
//                 )}
//             </div>
//         </section>
//     );
// }
