<template>
  <nav class="bg-slate-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-8 w-auto lg:hidden"
              src="/logo.svg"
              alt="Movies app"
            />
            <img
              class="hidden h-8 w-auto lg:block"
              src="/logo.svg"
              alt="Movies app"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <RouterLink
                to="/"
                class="bg-slate-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                aria-current="page"
                >Inicio
              </RouterLink>
              <RouterLink
                to="/add"
                class="text-white px-3 py-2 rounded-md text-sm font-medium"
                >Añadir pelicula
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <RouterLink
          to="/"
          class="bg-slate-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page"
          >Inicio</RouterLink
        >
      </div>
    </div>
  </nav>
</template>
