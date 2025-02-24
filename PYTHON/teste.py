import win32com.client

# Conectar ao SAP GUI
sap_gui_auto = win32com.client.GetObject("SAPGUI")
if not sap_gui_auto:
    raise Exception("SAP GUI não está em execução.")

application = sap_gui_auto.GetScriptingEngine
connection = application.Children(0)  # Conexão com o sistema SAP
session = connection.Children(0)  # Sessão ativa do SAP

# Acesse uma transação SAP, exemplo para VA01 (Pedido de Vendas)
session.StartTransaction("VA01")

# Exemplo de preenchimento de campo e navegação
session.findById("wnd[0]/usr/ctxtVBAK-AUART").text = "OR"  # Tipo de pedido
session.findById("wnd[0]/usr/ctxtVBAK-VKORG").text = "1000"  # Organização de vendas
session.findById("wnd[0]/tbar[0]/btn[11]").press()  # Executar