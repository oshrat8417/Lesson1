// Navbar - תפריט
// קישורים למשתמש

import { Link, NavLink } from 'react-router-dom'
import './style.css'

export const Navbar = () => {
    return <>
        <div className="nav">
            {/* a - תגית קישור של הטמל */}
            {/* כאשר יש כמה דפי הטמל */}
            {/* בכניסה ראשונה לאתר */}
            {/* שניגשת לשרת האינטרנט HTTP מתבצעת קריאת */}
            {/* ומבקשת ממנו את הדף הראשון של האתר / לפי קישור ספציפי */}
            {/* שרת האינטרנט מחזיר דף הטמל */}
            {/* כאשר רוצים לעבור מדף לדף תתבצע קריאה נוספת שתבקש את הדף הבא */}
            {/* תגית הקישור של הטמל - ניגשת לשרת האינטרנט */}
            {/* חסרונות: */}
            {/* 1. מה שיותר רחוק ממני - לוקח יותר זמן, יותר משאבים */}
            {/* 2. רענון של הדף - גורם לאיבוד נתונים שנשמרים בזמן ריצה */}
            {/* <a className="link" href="home">Home</a> */}
            {/* <a className="link" href="signin">Login</a> */}
            {/* <a className="link" href="products">Products</a> */}

            {/* Link - קומפוננטת קישור של ריאקט */}
            {/* SPA שימוש באפליקציה שמבוססת על דף אחד */}
            {/* בטעינה הראשונה של האתר */}
            {/* שרת האינטרנט טוען על מחשב הלקוח את כל הקומפוננטות */}
            {/* בניתוב המשחב ניגש לזיכרון הלוקאלי שלו */}
            {/* ושולף משם את הקומפוננטות שצריכות להטען על המסך */}
            {/* יתרונות: */}
            {/* 1. על חמשב הלקוח - פחות זמן, פחות משאבים */}
            {/* 2. הדף אינו מתרענן - הנתונים נשמרים */}
            {/* Link - path הניתוב כפי שמוגדר ב to מקבל פרמטר */}
            {/* <Link className="link" to="home">Home</Link> */}
            {/* <Link className="link" to="signin">Login</Link> */}
            {/* <Link className="link" to="products">Products</Link> */}

            {/* NavLink - תגית קישור נוספת של ריאקט */}
            {/* עם יכולת עיצובית Link כמו */}
            {/* ריאקט תחיל אותו על הלינק הפעיל active אם יש קלאס שנקרא */}
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="signin">Login</NavLink>
            <NavLink className="link" to="products">Products</NavLink>
        </div>
    </>
}