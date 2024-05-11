import css from "./Contact.module.css"
import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

export default function Contact({ data: { id, name, number }, onDelete }) {
    return (
      <div className={css.container}>
        <div className={css.text}>
          <p><IoPersonSharp />   {name}</p>

          <p><FaPhone />   {number}</p>
        </div>
        <button className={css.btn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    );
}