import React from 'react';
import UserCard from '../UserCard/UserCard';
import avatar from '../../assets/avatar.png';
import './find.css';

function Find() {
    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec nisl ac nisl egestas malesuada nec at odio. Curabitur gravida, urna sit amet suscipit bibendum, elit magna malesuada leo, at varius sapien massa in neque. Donec congue velit vel pellentesque interdum. Fusce ac accumsan nunc. Etiam nec urna eu tellus feugiat pretium. Nunc volutpat gravida elementum. Suspendisse a imperdiet arcu. Sed eget semper enim, in interdum neque. Suspendisse potenti Suspendisse tristique mi orci, non pulvinar diam congue sed. Nam at pulvinar massa, id commodo nisl. Proin dapibus metus eleifend augue maximus, non sagittis augue sodales. Suspendisse semper sagittis velit, et vehicula arcu aliquam lacinia. In convallis, neque at fringilla pulvinar, diam ligula sollicitudin lectus, et volutpat turpis risus eu justo. Morbi porta leo id ullamcorper euismod. Quisque velit tellus, molestie sit amet neque et, iaculis posuere nibh. Duis dictum, sem ut suscipit consequat, elit justo pulvinar ipsum, at iaculis nulla risus in nibh. Integer volutpat nisi a suscipit egestas. Maecenas dolor leo, egestas in sollicitudin nec, molestie vel sapien. Nulla dictum quam et est mattis, eget blandit augue bibendum. Sed egestas lectus sit amet interdum sagittis. Quisque sagittis porttitor facilisis. Fusce ut lectus ligula. Sed ut varius dolor. Donec nec tincidunt dui, sed lacinia eros. In vehicula dictum erat tempor commodo. In lacinia auctor lectus eget fermentum. Proin nec nisi mi. Quisque id tortor nunc. In vel sem ut massa consequat volutpat. Maecenas tempus non nisi ut convallis. Integer lacinia velit in enim lobortis vehicula. Cras et risus dictum, facilisis nisl in, sodales lorem. Pellentesque nisl neque, rutrum et justo in, semper fringilla leo. In aliquam magna erat, vitae mollis enim accumsan nec. Cras dictum finibus enim, id commodo sem interdum non. Sed ut est commodo, gravida purus et, imperdiet lacus. Maecenas aliquam urna ac augue ullamcorper euismod. Praesent aliquet turpis id euismod lobortis. Vestibulum sed nisi suscipit, venenatis purus quis, volutpat eros. Sed finibus enim vel quam malesuada, sed maximus est sodales. Vestibulum id sagittis dui, in luctus ante. Quisque eu lectus sit amet augue ultricies rhoncus vel non nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla nec odio eget enim mollis ultrices fringilla eu ex. Vivamus egestas, purus sit amet luctus volutpat, massa leo venenatis diam, vitae convallis risus libero ac odio. Etiam commodo vehicula sapien, sed consequat sapien varius eu. Vivamus eleifend commodo sem, eget luctus dolor. Cras lacinia, leo sit amet hendrerit laoreet, dolor dui luctus nisi, elementum porttitor felis felis id arcu. Fusce at feugiat odio."

    return (
        <section className="find-section">
            <h2>Encontre sua babá</h2>
            <div className="card-wrapper">
                <UserCard
                    avatar={avatar}
                    name="Raul"
                    age={19}
                    rating={1}
                    description={desc}
                />
                <UserCard
                    avatar={avatar}
                    name="Raul"
                    age={19}
                    rating={3}
                    description={desc}
                />
                <UserCard
                    avatar={avatar}
                    name="Raul"
                    age={19}
                    rating={3}
                    description={desc}
                />
            </div>
            <button className="find-button" type="button">Ver todas as babás</button>
        </section>
    );
}

export default Find;