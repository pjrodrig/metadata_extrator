module.exports = {
    xml_all_values: `
    <?xml version="1.0" encoding="utf-8"?>
    <rdf:RDF>
        <pgterms:ebook rdf:about="ebooks/1">
            <dcterms:issued rdf:datatype="http://www.w3.org/2001/XMLSchema#date">2000-12-01</dcterms:issued>
            <dcterms:subject>
                <rdf:Description>
                    <rdf:value>Subject 1</rdf:value>
                </rdf:Description>
            </dcterms:subject>
            <dcterms:creator>
                <pgterms:agent rdf:about="2009/agents/1">
                    <pgterms:name>Author 1</pgterms:name>
                </pgterms:agent>
            </dcterms:creator>
            <dcterms:language>
                <rdf:Description rdf:nodeID="Nb0c58cb56c8243349a1308a423c8adbd">
                    <rdf:value rdf:datatype="http://purl.org/dc/terms/RFC4646">Language</rdf:value>
                </rdf:Description>
            </dcterms:language>
            <dcterms:title>Book Title</dcterms:title>
            <dcterms:publisher>Publisher</dcterms:publisher>
            <dcterms:rights>License Rights</dcterms:rights>
        </pgterms:ebook>
    </rdf:RDF>
    `,
    xml_no_authors: `
    <?xml version="1.0" encoding="utf-8"?>
    <rdf:RDF>
        <pgterms:ebook rdf:about="ebooks/1">
            <dcterms:issued rdf:datatype="http://www.w3.org/2001/XMLSchema#date">2000-12-01</dcterms:issued>
            <dcterms:subject>
                <rdf:Description>
                    <rdf:value>Subject 1</rdf:value>
                </rdf:Description>
            </dcterms:subject>
            <dcterms:language>
                <rdf:Description rdf:nodeID="Nb0c58cb56c8243349a1308a423c8adbd">
                    <rdf:value rdf:datatype="http://purl.org/dc/terms/RFC4646">Language</rdf:value>
                </rdf:Description>
            </dcterms:language>
            <dcterms:title>Book Title</dcterms:title>
            <dcterms:publisher>Publisher</dcterms:publisher>
            <dcterms:rights>License Rights</dcterms:rights>
        </pgterms:ebook>
    </rdf:RDF>
    `,
    xml_multiple_authors: `
    <?xml version="1.0" encoding="utf-8"?>
    <rdf:RDF>
        <pgterms:ebook rdf:about="ebooks/1">
            <dcterms:issued rdf:datatype="http://www.w3.org/2001/XMLSchema#date">2000-12-01</dcterms:issued>
            <dcterms:subject>
                <rdf:Description>
                    <rdf:value>Subject 1</rdf:value>
                </rdf:Description>
            </dcterms:subject>
            <dcterms:creator>
                <pgterms:agent rdf:about="2009/agents/1">
                    <pgterms:name>Author 1</pgterms:name>
                </pgterms:agent>
            </dcterms:creator>
            <dcterms:creator>
                <pgterms:agent rdf:about="2009/agents/2">
                    <pgterms:name>Author 2</pgterms:name>
                </pgterms:agent>
            </dcterms:creator>
            <dcterms:creator>
                <pgterms:agent rdf:about="2009/agents/3">
                    <pgterms:name>Author 3</pgterms:name>
                </pgterms:agent>
            </dcterms:creator>
            <dcterms:language>
                <rdf:Description rdf:nodeID="Nb0c58cb56c8243349a1308a423c8adbd">
                    <rdf:value rdf:datatype="http://purl.org/dc/terms/RFC4646">Language</rdf:value>
                </rdf:Description>
            </dcterms:language>
            <dcterms:title>Book Title</dcterms:title>
            <dcterms:publisher>Publisher</dcterms:publisher>
            <dcterms:rights>License Rights</dcterms:rights>
        </pgterms:ebook>
    </rdf:RDF>
    `,
    xml_no_subjects: `
    <?xml version="1.0" encoding="utf-8"?>
    <rdf:RDF>
        <pgterms:ebook rdf:about="ebooks/1">
            <dcterms:issued rdf:datatype="http://www.w3.org/2001/XMLSchema#date">2000-12-01</dcterms:issued>
            <dcterms:creator>
                <pgterms:agent rdf:about="2009/agents/1">
                    <pgterms:name>Author 1</pgterms:name>
                </pgterms:agent>
            </dcterms:creator>
            <dcterms:language>
                <rdf:Description rdf:nodeID="Nb0c58cb56c8243349a1308a423c8adbd">
                    <rdf:value rdf:datatype="http://purl.org/dc/terms/RFC4646">Language</rdf:value>
                </rdf:Description>
            </dcterms:language>
            <dcterms:title>Book Title</dcterms:title>
            <dcterms:publisher>Publisher</dcterms:publisher>
            <dcterms:rights>License Rights</dcterms:rights>
        </pgterms:ebook>
    </rdf:RDF>
    `,
    xml_multiple_subjects: `
    <?xml version="1.0" encoding="utf-8"?>
    <rdf:RDF>
        <pgterms:ebook rdf:about="ebooks/1">
            <dcterms:issued rdf:datatype="http://www.w3.org/2001/XMLSchema#date">2000-12-01</dcterms:issued>
            <dcterms:subject>
                <rdf:Description>
                    <rdf:value>Subject 1</rdf:value>
                </rdf:Description>
            </dcterms:subject>
            <dcterms:subject>
                <rdf:Description>
                    <rdf:value>Subject 2</rdf:value>
                </rdf:Description>
            </dcterms:subject>
            <dcterms:subject>
                <rdf:Description>
                    <rdf:value>Subject 3</rdf:value>
                </rdf:Description>
            </dcterms:subject>
            <dcterms:creator>
                <pgterms:agent rdf:about="2009/agents/1">
                    <pgterms:name>Author 1</pgterms:name>
                </pgterms:agent>
            </dcterms:creator>
            <dcterms:language>
                <rdf:Description rdf:nodeID="Nb0c58cb56c8243349a1308a423c8adbd">
                    <rdf:value rdf:datatype="http://purl.org/dc/terms/RFC4646">Language</rdf:value>
                </rdf:Description>
            </dcterms:language>
            <dcterms:title>Book Title</dcterms:title>
            <dcterms:publisher>Publisher</dcterms:publisher>
            <dcterms:rights>License Rights</dcterms:rights>
        </pgterms:ebook>
    </rdf:RDF>
    `,
    xml_only_id: `
    <?xml version="1.0" encoding="utf-8"?>
    <rdf:RDF>
        <pgterms:ebook rdf:about="ebooks/1">
        </pgterms:ebook>
    </rdf:RDF>
    `
}