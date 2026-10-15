// routing - ניתוב
// router - נתב
//
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { Login } from "../Login"
import { Welcome } from "../Welcome"
import { List } from "../List"
import { Details } from "../Details"
import { Navbar } from "./Navbar"
import { NotFound } from "../NotFound"

// דמה ראוטינג - לא באמת נעבור מדף לדף
// SPA - single page application
// url הרואטינג יחליט אילו קומפוננטות נטענות עבור ניתוב שנמצא ב

// התקנה:
// react-router-dom

// יצירת קומפוננטה שמגדירה את כל הניתובים שקיימים בפרויקט
// Routing - לא שמור, מתאים

export const Routing = () => {
    return <>
        {/* BrowserRouter - דפדפן */}
        {/* הדפדפן של הניתובים */}
        {/* url הקומפוננטה הזו יודעת לזהות את הניתוב שנמצא בשורת ה */}
        {/* ולטעון את הקומפוננטה המתאימה */}
        {/* <BrowserRouter> */}
        {/* BrowserRouter קומפוננטת התפריט צריכה להיות טעונה גם בתוך ה */}
        {/* <Navbar></Navbar> */}
        {/* Routes - קומפוננטת האב של כל הניתובים */}
        {/* Routes נעטוף ב Route את כל ה */}
        <Routes>
            {/* Route - מגדירה ניתוב בודד */}
            {/* מקבלת שני פרמטרים: */}
            {/* 1. path - url הניתוב שיכתב בשורת ה */}
            {/* 2. element - path הקומפוננטה שתטען עבור הניתוב המוגדר ב */}
            {/* <Route path="home" element={<Home></Home>}></Route> */}
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="signin" element={<Login></Login>}></Route>
            {/* שליחת פרמטרים בניתוב */}
            {/* /:[param1_name]/:[param2_name] בהגדרת הניתוב נוסיף */}
            <Route path="welcome/:name/:email" element={<Welcome></Welcome>}></Route>
            <Route path="products" element={<List></List>}></Route>
            {/* <Route path="details/:desc/:img/:price" element={<Details></Details>}></Route> */}
            {/* url שליחת אובייקט בניתוב או שליחה של ערכים בלי שימוש בשורת ה */}
            {/* בניתוב אין אזכור לפרמטרים */}
            <Route path="details" element={<Details></Details>}></Route>

            {/* הגדרת ברירת מחדל */}
            {/* איזו קומפוננטה תטען בנחיתה - בכניסה לניתוב הבסיסי של האתר */}
            {/* ניתוב ריק או עם סלש */}
            {/* סלש - מחזיר את הניתוב לבסיס */}
            {/* <Route path="" element={<Home></Home>}></Route> */}

            {/* ניתוב לא נמצא */}
            <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>

        {/* </BrowserRouter> */}
    </>
}
