
interface IEnv {
  env:string,
  port:string,
  database:{
    url:string,
    user:string
  },
}
export default ():IEnv=>(
 {
  env:process.env.APP_ENV,
  port:process.env.PORT,
  database:{
    url:process.env.DB_URL,
    user:process.env.DB_USER
  }
 }
)