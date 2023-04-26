import { NavMenu } from "@/styles";
import { Session } from "next-auth";
import React from "react";

type Props = {
  session: Session | null;
};

function SignedInHeader({}: Props) {
  return (
    <>
      <NavMenu>
        <a>
          <img src="/images/home-icon.png" alt="" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.png" alt="Search icon" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.png" alt="WatchList icon"></img>
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.png" alt="Originals icon"></img>
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.png" alt="Movie icon"></img>
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.png" alt="Series icon"></img>
          <span>SERIES</span>
        </a>
      </NavMenu>
    </>
  );
}

export default SignedInHeader;
