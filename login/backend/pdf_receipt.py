import os

from fpdf import FPDF

def_spc = 20

def create_pdf(content):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font(family="helvetica", size = 25, style="BU")
    lines = content.split('\n')
    l = len(lines)
    # create a cell
    pdf.cell(200, 10, txt = lines[0], align = 'C')
    pdf.ln()

    pdf.set_font(family="helvetica", size = 15, style="")

    pdf.cell(200, 10, txt = lines[1], align = 'L')
    pdf.ln()
    pdf.cell(200, 10, txt = lines[2], align = 'L')
    pdf.ln()

    TABLE_DATA = []
    for i in range(3, l-1):
        # if(i == 3):
        #     pdf.set_font(family="Arial", style="")
        # elif(i == 4):
        #     pdf.set_font(family="Arial" ,style="")

        words = lines[i].split(" ")
        tup = tuple(words)
        TABLE_DATA.append(tup)
        # text = ""
        # for word in words:
        #     text += (word + " "*(def_spc - len(word)))

        # pdf.cell(200, 10, txt = text,
        #     ln = i+1, align = 'L')
    TABLE_DATA = tuple(TABLE_DATA)

    pdf.set_font("Times", size=16)
    with pdf.table() as table:
        for data_row in TABLE_DATA:
            row = table.row()
            for datum in data_row:
                row.cell(datum)

    pdf.ln()
    pdf.cell(200, 10, txt = lines[l-1]+" "*8, align = 'R')
    # save the pdf with name .pdf
    pdf.output("receipt.pdf")

cont = "Abir store\nName : Abir\nDate: 7638798\nName Author Price Copies\ngejdg sdhf 78 98\nkeufh kuehfi 89 58\njegjegf ekjhfhg 98 45\ntot 55"
create_pdf(content=cont)