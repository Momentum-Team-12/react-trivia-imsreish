<div>
    <p>Results go here:</p>
    {apiResults && apiResults.length ?
        apiResults.map((apiResult, index) => (
            <div key={index}>
                <p>{index}</p>
            </div>
        )) : null}
</div>