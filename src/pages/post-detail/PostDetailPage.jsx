import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { BASE_APP_URL } from "src/consts/API/API_CONSTS";
import PostDetail from "./components/PostDetail";

const PostDetailPage = () => {
    const params = useParams()


    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    

    return (
        <main className="main-page">
            <PostDetail />
        </main>
    )
}

export default PostDetailPage
