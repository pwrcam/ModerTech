<template>
  <div class="review-container">
    <div class="review-content">
      <h2>Performance Reviews</h2>
      <form @submit.prevent="addReview" class="review-form">
        <input v-model="newReview.employeeName" placeholder="Employee Name" required />
        <input v-model="newReview.reviewer" placeholder="Reviewer" required />
        <textarea v-model="newReview.comments" placeholder="Comments" required></textarea>
        <select v-model="newReview.rating" required>
          <option disabled value="">Rating</option>
          <option>Excellent</option>
          <option>Good</option>
          <option>Average</option>
          <option>Poor</option>
        </select>
        <button type="submit">Add Review</button>
        <button type="button" class="download-btn" @click="downloadAllWord">Download All as Word</button>
      </form>
      <div class="reviews-list">
        <div v-for="(review, idx) in reviews" :key="idx" class="review-card">
          <h4>
            {{ review.employeeName }}
            <span class="rating">({{ review.rating }})</span>
          </h4>
          <p><strong>Reviewer:</strong> {{ review.reviewer }}</p>
          <p>{{ review.comments }}</p>
          <button class="download-btn-individual" @click="downloadIndividualWord(review)">
            Download This Review
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  name: 'PerformanceReview',
  components: { NavBar },
  data() {
    return {
      newReview: {
        employeeName: '',
        reviewer: '',
        comments: '',
        rating: ''
      },
      reviews: [
        {
          employeeName: "Sibongile Nkosi",
          reviewer: "Quality Analyst",
          rating: "Excellent",
          comments: "Consistently exceeds expectations and delivers high-quality work."
        },
        {
          employeeName: "Lungile Moyo",
          reviewer: "Quality Analyst",
          rating: "Good",
          comments: "Meets expectations and is a reliable team member."
        },
        {
          employeeName: "Thabo Molefe",
          reviewer: "Quality Analyst",
          rating: "Average",
          comments: "Performance is satisfactory but has room for improvement."
        },
        {
          employeeName: "Keshav Naidoo",
          reviewer: "Quality Analyst",
          rating: "Poor",
          comments: "Needs to improve punctuality and attention to detail."
        }
      ]
    }
  },
  methods: {
    addReview() {
      this.reviews.push({ ...this.newReview });
      this.newReview = { employeeName: '', reviewer: '', comments: '', rating: '' };
    },
    downloadAllWord() {
      let content = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office'
              xmlns:w='urn:schemas-microsoft-com:office:word'
              xmlns='http://www.w3.org/TR/REC-html40'>
        <head><meta charset='utf-8'><title>Performance Reviews</title></head><body>
        <h2>Performance Reviews</h2>
        <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <th>Employee Name</th>
            <th>Reviewer</th>
            <th>Rating</th>
            <th>Comments</th>
          </tr>
          ${this.reviews.map(r => `
            <tr>
              <td>${r.employeeName}</td>
              <td>${r.reviewer}</td>
              <td>${r.rating}</td>
              <td>${r.comments}</td>
            </tr>
          `).join('')}
        </table>
        </body></html>
      `;
      const blob = new Blob(['\ufeff', content], { type: 'application/msword' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'performance_reviews.doc';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    },
    downloadIndividualWord(review) {
      let content = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office'
              xmlns:w='urn:schemas-microsoft-com:office:word'
              xmlns='http://www.w3.org/TR/REC-html40'>
        <head><meta charset='utf-8'><title>Performance Review</title></head><body>
        <h2>Performance Review</h2>
        <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
          <tr><th>Employee Name</th><td>${review.employeeName}</td></tr>
          <tr><th>Reviewer</th><td>${review.reviewer}</td></tr>
          <tr><th>Rating</th><td>${review.rating}</td></tr>
          <tr><th>Comments</th><td>${review.comments}</td></tr>
        </table>
        </body></html>
      `;
      const blob = new Blob(['\ufeff', content], { type: 'application/msword' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${review.employeeName.replace(/\s+/g, '_')}_review.doc`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  }
}
</script>

<style scoped>
.review-container {
  display: flex;
  min-height: 100vh;
  background: #f4f8ff;
}
.review-content {
  flex: 1;
  padding: 40px;
  background: #fff;
}
h2 {
  color: #1565c0;
}
.review-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #e3f0ff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 32px;
}
.review-form input,
.review-form textarea,
.review-form select {
  border: 1px solid #90caf9;
  border-radius: 4px;
  padding: 8px;
}
.review-form button {
  background: #1565c0;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 0;
}
.download-btn {
  background: #1976d2;
  margin-top: 0;
}
.download-btn-individual {
  background: #1976d2;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}
.reviews-list {
  display: grid;
  gap: 18px;
}
.review-card {
  background: #e3f0ff;
  border-left: 5px solid #1565c0;
  padding: 16px;
  border-radius: 6px;
}
.rating {
  color: #1565c0;
  font-weight: bold;
}
</style>