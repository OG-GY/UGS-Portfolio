import Services from "@/components/Services"

export const metadata = {
  title: "Services",
  description: "Explore the wide range of services offered by UET Game Studio. From game design and development to mobile app solutions, we provide innovative services to help you bring your ideas to life. Discover how we can help you with top-notch, cross-platform gaming experiences and more."
}
const page = () => {
  return (
    <div className="min-h-screen bg-[#0f1012] pt-24">
      <Services />
    </div>
  )
}

export default page