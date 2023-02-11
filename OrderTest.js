function CalcularValorDescontoTotalDoProduto()
{
  // Abertura da aplicação 
  TestedApps.Orders.Run();
  
  //Acesso ao formulario de Orders
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  
  // Seleção do tipo produto e preenchemos a quantidade
  Aliases.Orders.OrderForm.Group.ProductNames.ClickItem("ScreenSaver");
  Aliases.Orders.OrderForm.Group.Quantity.wValue = 10;
 
  //Validar os valores do campo
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Price, "wText", cmpEqual, "$20");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Discount, "wText", cmpEqual, "10%");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.groupBox1.Total, "wText", cmpEqual, "180");
  
  //Clicar no botão Cancelar
  Aliases.Orders.OrderForm.ButtonCancel.ClickButton();
  
  //Clique no Botão fechar o Order.
  Aliases.Orders.MainForm.Close();
}