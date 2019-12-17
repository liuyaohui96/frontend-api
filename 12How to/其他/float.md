

## clear float

```css
.clearfix {
  overflow: auto;
}


.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
```

## responsive float
```css
@media (max-width: 768px) {
  .float-right-sm {
    float: right;
  }
}
```