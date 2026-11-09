
import Card from './components/card.jsx'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.JD8-Cre3QL5J4IVKeUKwpAHaHa?pid=Api&P=0&h=180",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    tag3: "hey devvil",
    pay: 110,
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.9d7jVfTyC98GnJW3eH8VJQHaHa?pid=Api&P=0&h=180",
    companyName: "Apple",
    datePosted: "5 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 105,
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.BHsDLmb5Z-pq2W2DwOaZCAHaGF?pid=Api&P=0&h=180",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 120,
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.lQ9JvL9Rxhx_s-VKQNEidgHaEK?pid=Api&P=0&h=180",
    companyName: "Meta",
    datePosted: "2 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 130,
    location: "Remote",
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?pid=Api&P=0&h=180",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: 140,
    location: "Remote",
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.z1T0DCrxI5yoXtmENKO_5wHaHa?pid=Api&P=0&h=180",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 100,
    location: "Noida, India",
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.QZRUtEA8SeOZrUtbE7XCegHaHa?pid=Api&P=0&h=180",
    companyName: "Tesla",
    datePosted: "10 days ago",
    post: "UI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 125,
    location: "Pune, India",
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.zDbJfohjoZkSx8i9gj-bYgHaE0?pid=Api&P=0&h=180",
    companyName: "NVIDIA",
    datePosted: "1 week ago",
    post: "UX Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 115,
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.rSQ9DtGcrL8O5zE3Q_wicAHaEK?pid=Api&P=0&h=180",
    companyName: "Oracle",
    datePosted: "2 weeks ago",
    post: "Frontend Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 108,
    location: "Chennai, India",
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.BfJBe1y4PYTqyEzsGQX3ywHaEK?pid=Api&P=0&h=180",
    companyName: "Salesforce",
    datePosted: "3 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 75,
    location: "Hyderabad, India",
  },
];

console.log(jobOpenings)

  return (
    <div className="parent">
      {jobOpenings.map(function(elem){
        return <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo} datePosted={elem.datePosted} />
      })}
      
  
    </div> 
  )
}


export default App
