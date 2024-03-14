"use client";

import { useState } from "react";
import useSWR from "swr";
import Spinner from "../spinner";
import { Reaction } from "@/types/reactions";

const emojis = {
    THUMBS_UP: "👍",
    THUMBS_DOWN: '👎',
    LAUGH: "😄",
    HOORAY: "🎉",
    CONFUSED: "😕",
    HEART: "🧡",
    ROCKET: "🚀",
    EYES: "👀",
}

type EmojiKey = keyof typeof emojis;

export default function Reactions({ }) {
    const [initialLoading, setInitialLoading] = useState(true);
    async function fetcher(): Promise<Reaction[] | null> {
        try {
            const res = await fetch("api/reactions", {
                method: 'GET',
            });
            if (res.status == 404)
                throw new Error("Not response");
            const views = await res.json();
            setInitialLoading(false);
            return views;
        }
        catch (error) {
            setInitialLoading(false);
            return null;
        }
    }

    const { data } = useSWR(["api/reactions"], fetcher, {
    });


    return (
        <div className="flex justify-center">
            {
                initialLoading &&
                <Spinner />
            }
            {
                !initialLoading &&
                !data &&
                <h6>No se pudieron obtener las reacciones, intente mas tarde</h6>
            }
            {
                !initialLoading &&
                data &&
                <div className="grid grid-cols-2 max-w-md w-full gap-y-2 border border-gray-900 dark:border-gray-400 rounded-3xl p-8 ">
                    {
                        data.map(function (element, index) {
                            if (element.reaction in emojis) {
                                return (
                                    <div key={index} className="flex justify-center">
                                        <span>{emojis[element.reaction as EmojiKey]}</span>
                                        <p >{element.count}</p>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            }
        </div>
    )
}