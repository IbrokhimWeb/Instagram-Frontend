import React from 'react';
import s from "./Coments.module.css";

// Import Images
import coments from "../../../assets/coments.png"

function Coments(props) {
    return (
        <>
            <div className={s.coments}>
                {!true
                    ?
                    <>
                        {/* 'coments' */}
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed eum alias labore dolores praesentium ea. Provident similique ullam et repellendus dolores laboriosam consequuntur harum, explicabo cumque dolorem nostrum tempora excepturi voluptate optio odit sed quo magnam voluptatum cum, officiis numquam. Harum quam, magnam quasi, quibusdam autem eum facere vel vitae eos commodi ex fugiat placeat! Exercitationem corrupti voluptatibus nisi praesentium perspiciatis quis, molestias vel voluptatem commodi est nesciunt rerum et obcaecati inventore minima impedit eius dolore velit excepturi? Quae quidem ipsam dicta cupiditate architecto, ipsa pariatur illum numquam aspernatur. Porro odio, alias soluta ad repellat sapiente, quasi vero eius ducimus vitae molestias autem voluptatibus eveniet illo dolorem, aliquid quas explicabo tenetur. Et pariatur delectus voluptates officiis voluptatibus eum maxime ut impedit reiciendis nihil adipisci labore numquam eius, doloribus modi sint consequuntur harum maiores perferendis magnam voluptatum reprehenderit, vero dolores? Ullam dolor cupiditate nisi id cum pariatur facilis ad. Voluptate, commodi suscipit sed nobis nulla ratione aperiam in magnam fuga nihil accusantium repellendus aliquam repellat cumque beatae nam alias labore eos. Dolores soluta voluptas exercitationem, eaque molestias sit perspiciatis deleniti. Similique dignissimos vero praesentium nemo suscipit deserunt itaque explicabo temporibus! Eveniet excepturi maxime debitis in ducimus possimus unde modi amet eum eius error velit recusandae aperiam, quibusdam hic omnis nam earum facilis consectetur consequatur exercitationem magnam repudiandae, fuga dolore! Exercitationem, nesciunt amet sit pariatur vitae aperiam vero minima saepe laboriosam neque optio odio aut, autem cupiditate maiores dolorem repellat quisquam consequuntur excepturi! Delectus ut soluta beatae nulla ducimus veniam, perspiciatis rem, cum unde tempora, dolore corporis nesciunt eaque vel? Numquam cumque alias asperiores voluptatibus, quos doloribus deleniti quisquam mollitia nisi eaque quis aliquid praesentium amet sapiente incidunt dolores culpa totam animi consequatur vitae sit explicabo delectus! Repudiandae quod omnis laudantium facere, nesciunt adipisci pariatur doloremque excepturi perferendis repellat possimus veniam. Esse, quas dignissimos similique mollitia dolor itaque reiciendis nulla commodi accusamus debitis dolore excepturi quisquam rem ullam cum odit laboriosam consectetur alias numquam fugit molestias accusantium harum cumque placeat. Tempora, accusamus excepturi maxime sapiente quam ipsum. Libero corporis amet est? Et facere eum doloribus molestiae, accusantium ad deserunt sequi illo error eaque distinctio at modi ut necessitatibus natus fuga maxime excepturi itaque corrupti maiores repellendus blanditiis quam dicta aut? Quas sequi pariatur earum! Quaerat deserunt vero reprehenderit at quibusdam illum, explicabo necessitatibus nemo distinctio recusandae voluptatum officiis. Doloremque minus, fugiat eius veritatis, accusantium unde aliquid dolores voluptatibus sit quae adipisci accusamus tenetur tempora, asperiores dolorem consequatur corporis provident sed minima saepe pariatur earum. Magni doloribus asperiores soluta a, similique illo reiciendis voluptate amet expedita quae ex inventore quidem nulla aliquam aliquid nemo maxime quam maiores totam minima repudiandae magnam laborum mollitia! Deserunt perferendis autem perspiciatis, eveniet, nulla illum blanditiis ad possimus eum quos expedita provident sequi hic nobis alias tenetur fuga accusamus. Dolore, laudantium sapiente nam officia impedit perspiciatis odio esse quia dicta porro optio quis reprehenderit quam similique numquam qui exercitationem et. Sed nostrum, culpa cupiditate et, veritatis recusandae, pariatur in dolor explicabo libero dicta odio enim officia. Adipisci, cumque.</p>
                    </>
                    :
                    <>
                        <img className={s.img} src={coments} alt="" />
                        <br />
                        <h1>Нет комментариев.</h1>
                        <p>Начните переписку.</p>
                    </>
                }
            </div>
        </>
    );
}

export default Coments;