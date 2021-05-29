<List>
  {loading ? (
    <CircularProgress />
  ) : error ? (
    <Alert severity="error">{error}</Alert>
  ) : (
    <>
      <ListItem button onClick={() => categoryClickHandler('')}>
        <Logo></Logo>
      </ListItem>
      {categories.map((category) => (
        <ListItem
          key={category.name}
          button
          onClick={() => categoryClickHandler(category.name)}
        >
          <Avatar alt={category.name} src={category.image} />
        </ListItem>
      ))}
    </>
  )}
</List>

<Button
  variant="contained"
  color="primary"
  disabled={quantity === 1}
  onClick={(e) => quantity > 1 && setQuantity(quantity - 1)}
>
  <RemoveIcon />
</Button>
