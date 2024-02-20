function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  const books = [
    { author: 'john doe', year: 2011 },
    { author: 'jane doe', year: 2009 },
    { author: 'jim smith', year: 2015 },
    { author: 'jill smith', year: 2005 }
  ];
  
  function filterAndCapitalizeBooks(books) {
    const filteredBooks = books.filter(book => book.year >= 2010);
  
    return filteredBooks.map(book => ({
      author: capitalizeFirstLetter(book.author),
      year: book.year
    }));
  }
  
  const filteredAndCapitalizedBooks = filterAndCapitalizeBooks(books);
  console.log(filteredAndCapitalizedBooks);