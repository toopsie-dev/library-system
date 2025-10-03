<template>
  <aside class="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4">
    <h1 class="text-2xl font-bold mb-6">Library</h1>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/dashboard" class="block p-2 hover:bg-gray-700 rounded">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/dashboard/books" class="block p-2 hover:bg-gray-700 rounded">Books</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/dashboard/users" class="block p-2 hover:bg-gray-700 rounded">Users</NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
