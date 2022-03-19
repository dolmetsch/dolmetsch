<script>
export default {
    asyncData ({ redirect, params }) {
        return redirect(`/${params.language}/`)
    }
}
</script>