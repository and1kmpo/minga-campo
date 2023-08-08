export default function CiaForm() {
  const img_company = "src/assets/new_company.svg";
  return (
    <>
      <main className="flex w-full min-h-screen items-center justify-center overflow-x-hidden mb-6 font-roboto">
        <div className="flex flex-col mt-[10%] md:mt-[20%] lg:mt-[5%] justify-center items-center w-screen lg:w-[50%] lg:left-[50%]">
          <h1 className="mt-8 text-4xl text-center">New Company</h1>
          <img
            src={img_company}
            alt="company"
            className="mt-8 h-[105px] w-[100px]"
          />
          <div className="flex flex-col w-72 mt-5 gap-6">
            <input
              className="px-4 h-[50px] border-b hover:rounded-lg hover:border-rounded hover:border-purple"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <input
              className="px-4 h-[50px] border-b hover:rounded-lg hover:border-rounded hover:border-purple"
              type="text"
              name="website"
              id="website"
              placeholder="Website"
              required
            />
            <input
              className="px-4 h-[50px] border-b hover:rounded-lg hover:border-rounded hover:border-purple"
              type="text"
              name="url"
              id="url"
              placeholder="URL Profile Image"
              required
            />
            <input
              className="px-4 h-[50px] border-b hover:rounded-lg hover:border-rounded hover:border-purple"
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              required
            />
          </div>
          <input
            className="mt-10 w-[250px] lg:w-[280px] h-[55px] lg:h-[68px] font-bolder text-2xl text-gray-100 rounded-full bg-purple"
            type="button"
            value="Send"
          />
        </div>
      </main>
    </>
  );
}
