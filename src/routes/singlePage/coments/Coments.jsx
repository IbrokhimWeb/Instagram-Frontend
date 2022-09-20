import { React } from 'react';
import s from "./Coments.module.css";

// Import Images
import coments from "../../../assets/coments.png";

// Import Icons
import { BsHeartFill, BsReply } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
// Import Data
import { comments } from "../../../static/static"
function Coments(props) {

  return (
    <>
      <div className={s.coments}>
        {
          comments?.length
            ? (
              <>
                {
                  comments.map((e, i) =>
                    <div key={i} className={s.comment} >
                      <div className={s.comentItems}>
                        <img className={s.logo} src={e.creator.avatar} />
                        <div className={s.comentItem}>
                          {
                            e.comment?.length <= 210
                              ? <p>{e.comment}</p>
                              : e.comment
                                .split('')
                                .map((e, i) => i <= 190 ? e : '')
                                .join('') + ' ...'
                          }
                        </div>
                      </div>
                      <div className={s.data}>
                        <p>{e.data}</p>
                        <div className={s.reply}>Reply<BsReply /></div>
                        {
                          true
                            ?
                            <div className={s.commentLike}>
                              {e.commentLike >= 1000 ? <span>1k+</span> : <span>{e.commentLike}</span>}
                              <BsHeartFill
                                className={s.likeRed}
                                onClick={e => console.log(e)}
                              />
                            </div>
                            :
                            <div className={s.commentLike}>
                              {e.commentLike >= 1000 ? <span>1k+</span> : <span>{e.commentLike}</span>}
                              <AiOutlineHeart
                                className={s.postLike}
                                onClick={e => console.log(e)}
                              />
                            </div>
                        }
                      </div>
                    </div>
                  )
                }
              </>
            ) : (
              <div className={s.pustoy}>
                <img className={s.img} src={coments} alt="" />
                <br />
                <h1>Нет комментариев.</h1>
                <p>Начните переписку.</p>
              </div>
            )
        }
      </div>
    </>
  );
}

export default Coments;