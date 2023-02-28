echo "Acessando a pasta 'allure-results' (local)"

cd reports/
cd allure-results/

echo "Criando o arquivo environment.properties para adicionar informações ao campo 'AMBIENTE' do relatório"

cat > environment.properties << EOF
App=Qazando
Platform=Android 10.0
Version=2.0.1
Build=5.2
EOF

echo "Criando o arquivo executor.json para adicionar informações ao campo 'EXECUTORES' do relatório"

cat > executor.json << EOF
{
    "name": "Github",
    "type": "github",
    "url": "https://github.com/",
    "buildName": "allure-report-actions"
}
EOF

echo "Criando o arquivo categories.json para adicionar informações ao campo 'CATEGORIES' do relatório"

cat > categories.json << EOF
[
    {
        "name": "Testes reprovados",
        "matchedStatuses": [
            "failed"
        ]
    },
    {
        "name": "Testes aprovados",
        "matchedStatuses": [
            "passed"
        ]
    }
]
EOF