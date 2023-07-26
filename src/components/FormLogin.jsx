export default function FormLogin() {
  return (
    <div class="max-w-2xl w-full md:w-4/12">
      <div class="w-full p-4 sm:p-6 lg:p-8">
        <form class="space-y-6" action="#">
          <h3 class="text-xl font-medium text-center text-blue-700">
            Iniciar Sesión
          </h3>
          <div>
            {/* <label for="email" class="text-sm font-medium">Correo Electrónico</label> */}
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              placeholder="Correo Electrónico"
              required={true}
            ></input>
          </div>
          <div>
            {/* <label for="password" class="text-sm font-medium  block mb-2 dark:text-gray-300">Contraseña</label> */}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              required={true}
            ></input>
          </div>

          <button
            type="submit"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}
