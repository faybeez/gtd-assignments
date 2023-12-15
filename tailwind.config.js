/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Assignments/assignment1.html"],
  theme: {
    extend: {
      backgroundImage: {
        'wanderer': "url('/img/ui-namecardpic-wanderer-p.png')",
        'frem': "url('/img/frem3.png')",
      },
    },
  },
  plugins: [],
}

