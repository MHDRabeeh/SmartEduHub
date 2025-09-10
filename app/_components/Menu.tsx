import React from 'react'

const menuItems = [
    {
        title:"MENU",
        items:[
            {
                icon:"/home.png",
                label:"Home",
                href:"/"
            },
            {
                icon:"/teacher.png",
                label:"Teacher",
                href:"/teacher"

            },
            {
                icon:"/student.png",
                label:"Student",
                href:"/student"
            },
            {
                icon:"/parent.png",
                label:"Parent",
                href:"/parent"
            },
            {
                icon:"/class.png",
                label:"Class",
                href:"/class"
            }
        ]
    },
    {
        title:"OTHER",
        item:[
            {
                icon:"/profile.png",
                label:"Profile",
                href:"/profile"
            },
            {
                icon:"/settings.png",
                label:"Settings",
                href:"/settings"
            },
            {
                icon:"/logout.png",
                label:"Logout",
                href:"/logout"
            }
        ]
    }
]

export default function Menu() {

  return (
    <div>
      Menu bar
    </div>
  )
}
