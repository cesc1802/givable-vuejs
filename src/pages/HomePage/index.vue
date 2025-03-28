<template>
  <div class="home-page">
    <h1>Home Page</h1>
    <ul v-if="products.length">
      <li v-for="product in products" :key="product.id" class="product-item">
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <p><strong>Price:</strong> ${{ product.price }}</p>
      </li>
    </ul>
    <p v-else>Loading products...</p>
  </div>
</template>

<script lang="ts">
import { IProduct } from '@model/product';
import HttpFetcher from '@utils/http';
import { defineComponent, onMounted, ref } from 'vue';
import './styles.css';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const products = ref<IProduct[]>([]);

    const fetchProducts = async () => {
      try {
        const response = await HttpFetcher.get(
          'https://fakestoreapi.com/products'
        );
        console.log('response123', response);
        if (!response.success) return;
        products.value = response.data as IProduct[];
        console.log('products123', products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    onMounted(() => {
      fetchProducts();
    });

    return { products };
  },
});
</script>
