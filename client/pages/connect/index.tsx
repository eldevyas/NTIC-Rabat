import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Background from "../../components/core/Background";
import Header from "../../components/layout/header/header";
import Footer from "../../components/layout/footer/footer";
import { DefaultButton, OutlinedButton } from "../../components/core/button";
import Loading from "../../components/core/Loading";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import { io } from "Socket.IO-client";
import axios from "axios";
import Post from "../../components/connect/Post";
import * as Display from "../../services/displayAlert";
let socket;

const Connect = () => {
    const { data: session, status }: any = useSession();
    const [content, setContent] = useState<any>(null);
    const [posts, setPosts] = useState<any>([]);
    const [refresh, setRefresh] = useState<boolean>(false);
    const [isProjet, setIsProjet] = useState(false);
    const [image, setImage] = useState<any>([]);

    const router = useRouter();
    useEffect(() => {
        if (status === "loading") return;
        if (!session || status == "unauthenticated") {
            router.push("/auth/login");
        }
        // This is added to return undefined if there is no cleanup to be performed
        return undefined;
    }, [status, session]);

    // get all posts once the component is mounted
    useEffect(() => {
        setPosts([]);
        // get server url from env
        const url = process.env.SERVER_PUBLIC_API_URL;
        axios
            .get(url + "/post", {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                let arrayFiltered = Object.values(res.data).sort(
                    (a: any, b: any) => {
                        return b?.id - a?.id;
                    }
                );
                setPosts(arrayFiltered);
                // timeout to refresh the posts
            })
            .catch((err) => {
                Display.pushFailure("Une erreur est survenue");
                console.log(err);
            });
    }, [refresh]);

    // get all posts once the component is mounted

    const handlePublish = () => {
        // check if content is empty or has only spaces
        // convert the new line breaker in content to /n

        if (content?.trim() === "") {
            Display.pushFailure("Veuillez saisir un contenu");
            return;
        }
        // get server url from env
        const url = process.env.SERVER_PUBLIC_API_URL;
        axios
            .post(
                url + "/post",
                {
                    content: content,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + session?.user?.token,
                    },
                }
            )
            .then((res) => {
                Display.pushSuccess("Publication effectuée avec succès");
                // reset the content
                setContent("");
                setRefresh(!refresh);
                // refresh the posts
            })
            .catch((err) => {
                Display.pushFailure("Une erreur est survenue");
            });
    };
    const handleShareProjet = () => {
        console.log("projet");
    }

    return (
        <>
            {session && (
                <>
                    <Head>
                        <title>NTIC Connect - Accueil</title>
                    </Head>

                    <div className="Main">
                        <div className="CreatePost">
                            <div className="Profile">
                                <Image
                                    src="/assets/img/pp/pp1.png"
                                    className="Avatar"
                                    alt="profile"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className="Form">
                                <div className="Input">
                                    <textarea
                                        placeholder={`Que pensez-vous ? ${session?.user?.name?.split(" ")[0]
                                            }.`}
                                        onChange={(e: any) =>
                                            setContent(e.target.value)
                                        }
                                        value={content ? content : ""}
                                    ></textarea>
                                    {
                                        isProjet ? (
                                            <div className="Urls">
                                                <input type="text" name="GithubUrl" className="Url" placeholder="Enter github url" />
                                                <input type="text" name="DemoUrl" className="Url" placeholder="Enter demo url" />
                                            </div>
                                        ) : (
                                            null
                                        )
                                    }
                                </div>
                                <div className="Images">
                                    {image && (
                                        // loop through the images
                                        image.map((img: any) => (
                                            <div className="Image">
                                                <Image
                                                    src={img}
                                                    alt="image"
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                        ))


                                    )}
                                </div>

                                <div className="Actions">
                                    <DefaultButton
                                        onClick={() => setIsProjet(!isProjet)}

                                    >
                                        <Image
                                            src="/assets/svg/Design.svg"
                                            alt="Design"
                                            width={20}
                                            height={20}
                                        />
                                        Projet / Réalisation
                                    </DefaultButton>
                                    {/* input type file , display hidden , accepts img , and display the uploaded image */}

                                    <input
                                        type="file"
                                        id="fileInput"
                                        style={{ display: "none" }}
                                        // allow multiple images
                                        multiple
                                        accept="image/*"
                                        onChange={(e: any) => {
                                            // get all the files and convert them to base64
                                            const files = e.target.files;
                                            const filesArray = Array.from(files);
                                            filesArray.forEach((file: any) => {
                                                const reader = new FileReader();
                                                reader.onloadend = () => {
                                                    // push the base64 to the image state
                                                    setImage((prev: any) => [
                                                        ...prev,
                                                        reader.result,
                                                    ]);
                                                };
                                                reader.readAsDataURL(file);
                                            });
                                        }}


                                    />
                                    <DefaultButton
                                        // on click , choose file and upload it
                                        onClick={() => {
                                            const fileInput = document.getElementById("fileInput");
                                            fileInput?.click();
                                        }
                                        }
                                    >
                                        <Image
                                            src="/assets/svg/Catalog.svg"
                                            alt="Photo"
                                            width={20}
                                            height={20}
                                        />
                                        Photo / Video
                                    </DefaultButton>
                                    {
                                        isProjet ? (
                                            <DefaultButton
                                                type="primary"
                                                size="small"
                                                className="Publish"
                                                onClick={handleShareProjet}
                                            >
                                                Partager projet
                                                <SendIcon fontSize="small" />
                                            </DefaultButton>

                                        ) : (
                                            <DefaultButton
                                                type="primary"
                                                size="small"
                                                className="Publish"
                                                onClick={handlePublish}
                                            >
                                                Publier
                                                <SendIcon fontSize="small" />
                                            </DefaultButton>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="Posts">
                            {Array.isArray(posts) &&
                                posts.map((post, index) => (
                                    <Post
                                        key={index}
                                        post={post}
                                        user={session?.user}
                                    />
                                ))}
                        </div>
                    </div>
                </>
            )}

            {
                // Show spinner in case the session is loading
                status === "loading" || (!session && <Loading />)
            }
        </>
    );
};

export default Connect;
