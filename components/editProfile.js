

export function editProfile() {
    return (
      <>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-2 w-full text-sm 
                text-black bg-transparent border-0 border-b-2 
                border-gray-300 appearance-none peer"
              placeholder=" "
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="floating_first_name">First name</label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-2 w-full text-sm 
                text-black bg-transparent border-0 border-b-2 
                border-gray-300 appearance-none peer"
              placeholder=" "
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="floating_last_name">Last name</label>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-2 w-full text-sm text-black 
                bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                dark:border-gray-600 peer"
              placeholder=" "
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label htmlFor="floating_phone">Phone number</label>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-black font-medium rounded-lg 
            text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          onClick={profileChanged}
        >
          Submit
        </button>
      </>
    );
  }